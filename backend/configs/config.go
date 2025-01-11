package configs

// https://stackoverflow.com/questions/16465705/how-to-handle-configuration-in-go

import (
	"encoding/json"
	"os"
	"path/filepath"
	"time"

	log "github.com/sirupsen/logrus"
)

func Exists(path string) (bool, error) {
	_, err := os.Stat(path)
	if err == nil {
		return true, nil
	}
	if os.IsNotExist(err) {
		return false, nil
	}
	return false, err
}

func GetAppDir() string {
	configDir, err := os.UserConfigDir()
	if err != nil {
		log.Error("Could not get user config directory.")
		panic(err)
	}

	appConfigDir := filepath.Join(configDir, AppName+".exe")

	log.Info("Config directory: ", appConfigDir)

	exists, err := Exists(appConfigDir)
	if err != nil {
		log.Error("Could not check if config directory exists.")
		panic(err)
	}

	if !exists {
		err = os.MkdirAll(appConfigDir, os.ModePerm)
		if err != nil {
			log.Error("Could not create config directory.")
			panic(err)
		}
		log.Info("Created config directory.")
	}

	return appConfigDir
}

func GetConfigFile() string {
	return filepath.Join(GetAppDir(), ConfigFile)
}

func GetDatabaseFile() string {
	return filepath.Join(GetAppDir(), DatabaseFile)
}

func GetLogDir() string {
	logDir := filepath.Join(GetAppDir(), LogDir)

	exists, err := Exists(logDir)
	if err != nil {
		log.Error("Could not check if log directory exists.")
		panic(err)
	}

	if !exists {
		err = os.MkdirAll(logDir, os.ModePerm)
		if err != nil {
			log.Error("Could not create log directory.")
			panic(err)
		}
		log.Info("Created log directory.")
	}

	return logDir
}

func GetLogFile() string {
	// log file with the current date and time
	return filepath.Join(GetLogDir(), time.Now().Format("2006-01-02_15-04-05")+".log")
}

func GetConfig() *Config {
	config := &Config{}

	err := config.Load()
	if err != nil {
		log.Error("Could not load app config.")
		panic(err)
	}

	return config
}

func (c *Config) CreateDefault() {
	c.App.ShowedWelcome = true
	c.User.AutoStart = false
	c.User.PushNotifications = true
	c.User.DarkMode = true

	err := c.Save()
	if err != nil {
		log.Error("Could not save app config.")
		panic(err)
	}
}

func (config *Config) Load() error {
	configFile := GetConfigFile()

	if _, err := os.Stat(configFile); os.IsNotExist(err) {
		config.CreateDefault()
	}

	file, err := os.ReadFile(configFile)
	if err != nil {
		return err
	}

	err = json.Unmarshal(file, config)
	if err != nil {
		return err
	}

	log.Info("Loaded app config:", config)

	return nil
}

func (config *Config) Save() error {
	path := GetConfigFile()

	data, err := json.MarshalIndent(config, "", "  ")
	if err != nil {
		return err
	}

	err = os.WriteFile(path, data, 0644)
	if err != nil {
		return err
	}

	log.Debug("Saved app config.")

	return nil
}

func (c *Config) Delete() {
	path := GetConfigFile()

	err := os.Remove(path)
	if err != nil {
		log.Error("Could not delete app config.")
	}
}
