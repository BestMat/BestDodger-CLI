// © 2021 - BestMat - BestDodger - NodeJS Command line interface
const http = require('http')
const fs = require('fs');
const checkOS = (a) => {
    var os = a.os;
    var global = a.global
    if(os === "ubuntu" || os === "redhat"){
        if(!global){
        fs.readFile('./linuxvm.html', function (err, html) {
            if (err) {
                throw err; 
            }       
            http.createServer(function(request, response) {  
                response.writeHeader(200, {"Content-Type": "text/html"});  
                response.write(html);  
                response.end();  
                console.log("Virtual machine listening on localhost port 8080");
            }).listen(8080);
        });
    }else if(os === "ms-dos"){
        if(!global){
            fs.readFile('./dosVm.html', function (err, html) {
                if (err) {
                    throw err; 
                }       
                http.createServer(function(request, response) {  
                    response.writeHeader(200, {"Content-Type": "text/html"});  
                    response.write(html);  
                    response.end();  
                    console.log("Virtual machine listening on localhost port 8080");
                }).listen(8080);
            });
    }
    }else if(os === "ms-windows7"){
        if(!global){
            fs.readFile('./windows7.html', function (err, html) {
                if (err) {
                    throw err; 
                }       
                http.createServer(function(request, response) {  
                    response.writeHeader(200, {"Content-Type": "text/html"});  
                    response.write(html);  
                    response.end();  
                    console.log("Virtual machine listening on localhost port 8080");
                }).listen(8080);
            });
    }else if(os === "ms-vista"){
        if(!global){
            fs.readFile('./vista.html', function (err, html) {
                if (err) {
                    throw err; 
                }       
                http.createServer(function(request, response) {  
                    response.writeHeader(200, {"Content-Type": "text/html"});  
                    response.write(html);  
                    response.end();  
                    console.log("Virtual machine listening on localhost port 8080");
                }).listen(8080);
            });
    }else if(os === "bestos"){
        console.log("BestOS is in developement!")
    }
}
}
}
};
// Module Exports
module.exports.virtualMachines = class {
    constructor(){}
    createVM(obj){
        checkOS(obj);
    }
    manageVM(obj){
        let vm_name_manage = obj.vm_name
        let action = obj.action
        if(action === "start"){
            for(let i = 0; i < 20; i++){}
            console.log("Started VM. Pls go to htpps://bestdodger.netlify.app/ to view your vm.")
        }else if(action === "start"){
            for(let i = 0; i < 22; i++){}
            console.log("Shutted Down.")
        }else if(action === "restart"){
            for(let i = 0; i < 22; i++){}
            console.log("Restarted")
        }else if(action === "lock"){
            for(let i = 0; i < 10; i++){}
            console.log("VM Locked. Deleting this VM is inpossible. If you want to delete this, please raise a issue at Github for the repo bestdeveloper-issues and at the org @bestmat.")
        }else if(action === "control"){     
            const puppeteer = require('puppeteer');
            run().then(() => console.log('Done')).catch(error => console.log(error));

            async function run() {
                const browser = await puppeteer.launch({ headless: false });

                const page = await browser.newPage();
                await page.goto('https://bestdodger-bestmat.netlify.app/virtual-machines/docs/vmlocal/controlvm.html');
                await new Promise(resolve => setTimeout(resolve, 5000));

                await browser.close();
            }
        }else if(action === "delete"){
            console.log("Deleting VM can be done manual")
        }
    }
}