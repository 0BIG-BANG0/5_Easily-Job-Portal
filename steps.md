# Steps 

1. Clone the main branch of Boilerplate in github : 
### git clone -b branch_name repository_url

2. create the remaining part like model controller and views

3. Created Jobs pages which has Dynamic Data 
    1. Routes : get req which call getJobs in productControlller
    2. Controller : Call the get method from model which returns all the jobs .
    3. Model: Consists os jobs array and a static get Method.

4. Created View Details Pages

5. Add New Job -  
    1. - There should be a body Parser so to parse the data comming from form
    2. - View - for add-new job and name make it same as model 
    3. - Controller - extract all the data and send it to model where you add it to the jobs array.
            on every reload what we see our data gets add to solve this we use res.redirect 
    4. - Model - Create a static Method add Job where you create a new job object and push it into jobs array





    Functionality 
    1. Delete job
    2. Edit job
    3. See Applicants
    4. Apply JOb 