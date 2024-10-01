#!/bin/bash

# Path to your screen layout presets
SCREENLAYOUT_DIR="/home/leo/.screenlayout"
WALLPAPER_SCRIPT="/home/leo/.config/polybar/wallpaper.sh" # Adjust this path if your wallpaper script is located elsewhere

# Name of the screen layout preset to use
SCREEN_LAYOUT="3tv.sh" 

# Polybar launch script
LAUNCH_SCRIPT="/home/leo/.config/polybar/launch.sh"

# Terminate existing Polybar instances
polybar-msg cmd quit || true
killall -q polybar || true

# Launch Polybar bars using the launch script
bash "$LAUNCH_SCRIPT"

# Execute the screen layout script
bash "$SCREENLAYOUT_DIR/$SCREEN_LAYOUT"

# Update the wallpaper
bash "$WALLPAPER_SCRIPT"
