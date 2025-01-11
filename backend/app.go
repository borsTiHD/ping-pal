package backend

import (
	"context"
	"fmt"

	"ping-pal/backend/configs"
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
func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) DomReady(ctx context.Context) {
	a.initialize()
}

func (a *App) Shutdown(ctx context.Context) {

}

func (a *App) initialize() {
	a.config.Load()

	// err := a.database.Connect()
	// if err != nil {
	// 	logrus.Error("Failed to connect to database: ", err)
	// 	return
	// }
	// a.database.Migrate()

	// tools.PushToRoute(a.ctx, "/app/index")
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}
