function updateClock(){
    var now = new Date();
    var dName = now.getDay(),
        mName = now.getMonth(),
        dNum = now.getDate(),
        yName = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        if(hou==0){
            hou = 12;
        }

        if (hou > 12){
           hou = hou - 12;
           pe = "PM";
        }

        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 +n);
            return n;
        }


        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "second", "period"];
        var values = [week[dName], months[mName], dNum.pad(2), yName, hou.pad(2), min.pad(2), sec.pad(2), pe];
        for(var i = 0; i < ids.length; i++ )
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}