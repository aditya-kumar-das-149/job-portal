var jobs=[
{id:1,role:"Frontend",company:"TechCorp",loc:"Bangalore",exp:"2"},
{id:2,role:"Backend",company:"DataMind",loc:"Pune",exp:"3"},
{id:3,role:"Fullstack",company:"FinanceHub",loc:"Mumbai",exp:"5"},
{id:4,role:"ML/AI",company:"AIWorks",loc:"Delhi",exp:"2"},
{id:5,role:"Cloud",company:"CloudFirst",loc:"Hyderabad",exp:"4"},
{id:6,role:"Frontend",company:"CreativeStudios",loc:"Delhi",exp:"1"},
{id:7,role:"Backend",company:"SecureNet",loc:"Bangalore",exp:"3"},
{id:8,role:"Fullstack",company:"WebSolutions",loc:"Mumbai",exp:"2"},
{id:9,role:"ML/AI",company:"DataSciencePro",loc:"Pune",exp:"4"},
{id:10,role:"Cloud",company:"CloudTech",loc:"Bangalore",exp:"3"}
]

var jobContainer=document.getElementById("jobCards")
function showJobs(list){
jobContainer.innerHTML=""
for(var i=0;i<list.length;i++){
var j=list[i]
var div=document.createElement("div")
div.className="jobCard"
div.innerHTML="<h3>"+j.role+"</h3><p>Company: "+j.company+"</p><p>Location: "+j.loc+"</p><p>Exp: "+j.exp+" yrs</p><button class='edit' onclick='editJob("+j.id+")'>Edit</button><button onclick='deleteJob("+j.id+")'>Delete</button>"
jobContainer.appendChild(div)
}
}

function searchJobs(){
var t=document.getElementById("searchText").value.toLowerCase()
var r=document.getElementById("roleSelect").value
var l=document.getElementById("locSelect").value
var res=jobs.filter(function(j){return (j.role.toLowerCase().includes(t)||j.company.toLowerCase().includes(t))&&(r==""||j.role==r)&&(l==""||j.loc==l)})
showJobs(res)
}

function editJob(id){
var j=jobs.find(function(x){return x.id==id})
var r=prompt("Role",j.role)
var c=prompt("Company",j.company)
var loc=prompt("Location",j.loc)
var e=prompt("Experience",j.exp)
if(r)j.role=r;if(c)j.company=c;if(loc)j.loc=loc;if(e)j.exp=e
showJobs(jobs)
}

function deleteJob(id){
jobs=jobs.filter(function(x){return x.id!=id})
showJobs(jobs)
}

showJobs(jobs)