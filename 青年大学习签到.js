openAppSetting(getPackageName("微信"));
sleep(2000)
click("结束运行")
sleep(2000)
click("确定")
home()
launchApp("微信")
id("fdi").findOne().click()
id("bxz").findOne().setText("云南共青团")
className("android.widget.TextView").text("云南共青团").findOne().parent().click()
className("android.widget.TextView").text("大学习").findOne().parent().click()
sleep(5000)
toast(click("我的"))
sleep(5000)
click("签到")
sleep(2000)
openAppSetting(getPackageName("微信"));
sleep(2000)
click("结束运行")
sleep(2000)
click("确定")
launchApp("微信")