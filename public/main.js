
function deleteJob(id){
    const result = confirm("Are you sure you want to delete this job?")
    if(result){
        fetch("/deleteJob/"+id, {
            method: "POST" // we have to chnage req to post in routes
        }).then(res=>{
            if(res.ok){
                location.reload();
            }
        })
    }
}