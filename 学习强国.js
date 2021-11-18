openAppSetting(getPackageName("一键强国"));
sleep(2000)
click("结束运行")
sleep(2000)
click("确定")
home()
launchApp("一键强国")

while(!className("android.widget.Button").text("积分执行(推荐)").findOne().click()){
    launchApp("一键强国")
    toast(className("android.widget.Button").text("积分执行(推荐)").findOne().click())
}

