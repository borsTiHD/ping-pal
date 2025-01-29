package event

import (
	"context"

	"github.com/sirupsen/logrus"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// EmitEvent emits an event to the frontend
func EmitEvent(ctx context.Context, eventName string, optionalData ...interface{}) {
	logrus.Debug("Emitting event: ", eventName)
	runtime.EventsEmit(ctx, eventName, optionalData...)
}
