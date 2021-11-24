openAppSetting(getPackageName("设置"));
sleep(2000)
click("结束运行")
sleep(2000)
click("确定")
home()
launchApp("设置")
className("android.widget.TextView").text("搜索系统设置项").findOne().setText("指针位置")