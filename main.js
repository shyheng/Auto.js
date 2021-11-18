toast("开始")
if (!$power_manager.isIgnoringBatteryOptimizations()) {
    console.log("未开启忽略电池优化");
    $power_manager.requestIgnoreBatteryOptimizations();
}
console.log($timers.addDailyTask({
    path: "/storage/脚本/青年大学习签到.js",
    time: new Date(0, 0, 0, 15, 41, 0),
    delay: 0,
    loopTimes: 1,
    interval: 0,
}));
toast("完成")