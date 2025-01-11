package main

import (
	"embed"

	log "github.com/sirupsen/logrus"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"

	"ping-pal/backend"
)

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
	app := backend.NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "ping-pal",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.Startup,
		OnShutdown:       app.Shutdown,
		OnDomReady:       app.DomReady,
		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		log.Fatal("Application crashed:", err.Error())
	}
}
