const todo = require('./crud')



function main(cmdArgs) {
    const parseArgs = todo.parseCmdArgs(cmdArgs);
    switch (parseArgs.command) {
        case 'add':
            todo.add(parseArgs)
            break;
        case 'edit':
            todo.edit(parseArgs)
            break;
        case 'delete':
            todo.delete(parseArgs)
            break;
        case 'list':
            todo.list()
            break;
        
        default:
            break;
    }
   
}

main(process.argv)