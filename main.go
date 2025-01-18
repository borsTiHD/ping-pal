package main

import (
	"embed"

	log "github.com/sirupsen/logrus"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"

	"ping-pal/backend/configs"
)

// is used for single instance locking. This means that only one instance of the application can be running at a time.
var guid = "com.pingpal.app"

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	log.SetLevel(log.DebugLevel)
	log.SetFormatter(&log.TextFormatter{
		DisableColors: false,
		ForceColors:   true,
		PadLevelText:  true,
		FullTimestamp: true,
	})

	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title: configs.AppName,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},

		// Window options
		Width:     configs.Width,
		Height:    configs.Height,
		MinWidth:  configs.MinWidth,
		MinHeight: configs.MinHeight,
		// MaxWidth:  configs.Width,
		// MaxHeight: configs.Height,
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		Frameless:        false,

		// Application events
		OnStartup:  app.startup,
		OnShutdown: app.shutdown,
		OnDomReady: app.domReady,
		SingleInstanceLock: &options.SingleInstanceLock{
			UniqueId:               guid,
			OnSecondInstanceLaunch: app.onSecondInstanceLaunch,
		},
		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		log.Fatal("Application crashed:", err.Error())
	}
}
