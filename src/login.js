
function go(){



    var req = new XMLHttpRequest()
        req.onreadystatechange = function()
        {
            if (req.readyState == 4)
            {
                if (req.status != 200)
                {
                    //error handling code here
                }
                else
                {
                    //var Respons = JSON.parse(req.responseText)
                    console.log(req.response)
                   if (req.response != "false"){
                    alert("login successful")
                   }
                   else{
                       alert("wrong username or password")
                   }
                }
            }
        }
      
        req.open('POST', 'http://localhost:5000/login')
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
       var user=document.getElementById("username").value
       var pa=document.getElementById("password").value
        req.send("emp_id="+user+"&emp_password="+pa)
        
    }


    document.getElementById("go").onclick=go
