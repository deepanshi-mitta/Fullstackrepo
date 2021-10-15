var rollV,nameV,genderV,addressV;
function readform(){
    rollV=document.getElementById("roll").value;
    nameV=document.getElementById("name").value;
    genderV=document.getElementById("gender").value;
    addressV=document.getElementById("address").value;
    console.log(rollV,nameV,addressV,genderV);
}
document.getElementById("insert").onClick=function(){
readform();
firebase
.database()
.ref("student/"+rollV)
.set({
    rollNo:rollV,
    name:nameV,
    gender:genderV,
    address:addressV,
});
alert("Data Inserted");
rollV=document.getElementById("roll").value="";
nameV=document.getElementById("name").value="";
genderV=document.getElementById("gender").value="";
addressV=document.getElementById("address").value="";
};
document.getElementById("read").onClick=function(){
    readform();
    firebase
    .database()
    .ref("student/"+rollV)
    .on("value",function(snap){
document.getElementById("roll").value=snap.val().rollNo;
document.getElementById("name").value=snap.val().name;
document.getElementById("gender").value=snap.val().gender;
document.getElementById("address").value=snap.val().address;
    });
};
document.getElementById("update").onClick=function(){
    readform();
    firebase
    .database()
    .ref("student/"+rollV)
    .update({
        name:nameV,
        gender:genderV,
        address:addressV,

    });
alert("data Update")
rollV=document.getElementById("roll").value="";
nameV=document.getElementById("name").value="";
genderV=document.getElementById("gender").value="";
addressV=document.getElementById("address").value="";
};
document.getElementById("delete").onClick=function(){
    readform();
    firebase
    .database()
    .ref("student/"+rollV)
    .remove();
    alert("data deleted")
    rollV=document.getElementById("roll").value="";
    nameV=document.getElementById("name").value="";
    genderV=document.getElementById("gender").value="";
    addressV=document.getElementById("address").value="";
    
};


