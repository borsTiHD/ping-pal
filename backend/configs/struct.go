package configs

type Config struct {
	App  AppConfig  `json:"app"`
	User UserConfig `json:"user"`
}

type AppConfig struct {
	ShowedWelcome bool `json:"showedWelcome"`
}

type ColorMode string

const (
	ColorModeAuto  ColorMode = "auto"
	ColorModeDark  ColorMode = "dark"
	ColorModeLight ColorMode = "light"
)

type UserConfig struct {
	AutoStart         bool      `json:"autoStart"`
	PushNotifications bool      `json:"pushNotifications"`
	ColorMode         ColorMode `json:"colorMode"`
}
