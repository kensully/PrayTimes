#!/bin/bash
wmctrl -i -r $(wmctrl -lG | grep "Daily Prayer Timetable" | awk '{print $1}') -b add,skip_taskbar
