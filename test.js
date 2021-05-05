const bestdodger = require("./bestdodger")
const bestdodger_vm  = new bestdodger.virtualMachines()
bestdodger_vm.createVM({
    "name": "name",
    "uname": "uname",
    "pwd": "123",
    "os": "ubuntu",
    "global": false
})