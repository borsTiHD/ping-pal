package main

import (
	"context"
	"fmt"

	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/runtime"

	"ping-pal/backend/configs"
	"ping-pal/backend/hosts"
)

// App struct
type App struct {
	ctx    context.Context
	config configs.Config
}

// NewApp creates a new App application struct
func NewApp() *App {
	a := &App{}

	a.config = configs.Config{}

	return a
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

	// load the config
	a.config.Load()
}

func (a *App) domReady(ctx context.Context) {
	a.initialize()
}

func (a *App) shutdown(ctx context.Context) {

}

func (a *App) initialize() {
	// a.config.Load()

	// err := a.database.Connect()
	// if err != nil {
	// 	logrus.Error("Failed to connect to database: ", err)
	// 	return
	// }
	// a.database.Migrate()

	// tools.PushToRoute(a.ctx, "/app/index")
}

// when a second instance is launched, this function is called
// prevents multiple instances of the app running
func (a *App) onSecondInstanceLaunch(secondInstanceData options.SecondInstanceData) {
	runtime.WindowUnminimise(a.ctx)
	runtime.Show(a.ctx)
	go runtime.EventsEmit(a.ctx, "launchArgs", secondInstanceData.Args)
}

/*
 * The following functions are public and are published to the frontend part of the application.
 */
func (a *App) GetConfig() configs.Config {
	return a.config
}

func (a *App) GetAppName() string {
	return configs.AppName
}

func (a *App) GetVersion() string {
	return configs.AppVersion
}

func (a *App) GetChannel() string {
	return configs.AppChannel
}

func (a *App) GetRepoUrl() string {
	return configs.RepoUrl
}

func (a *App) SaveConfig(config configs.Config) {
	a.config = config
	a.config.Save()
}

func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) AddHost(host hosts.NewHost) {
	hosts.AddItem(host)
}

func (a *App) GetHosts() []hosts.HostItem {
	return hosts.GetItems()
}

func (a *App) DeleteHost(id int) bool {
	return hosts.DeleteItem(id)
}
