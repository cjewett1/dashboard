/* Alt + Shift + A = Multi Line Comment */

/*
        Sequence of events - 
        Import Data
        Send Data to Render Function
        RenderFunction(template, data) ===> Component marked up with data.

        1. Creating a template
        2. Setup a page init function async. Fetch the Realtime database data. Needs to be an async operation.
        3. Loading the data - Read, Update, Delete all share the same data...

*/

import {ref, get} from 'firebase/database'

import {db} from './libs/firebase/firebaseConfig';

import {renderUser} from './templates/users';

let store = [];

async function pageInit() {

/*     console.log(renderUser())
    document.querySelector('.users').appendChild(renderUser()) */

    const userRef = ref(db, 'users/');
    const userSnapShot = await get(userRef); //Snapshot of the data at a given time.
    const userData = {...userSnapShot.val()}
    Object.keys(userData).map(user => { //.map returns a new array
        console.log(userData[user])
    })

    /* When working with Objects, 2 ways to access properties =
    obj.prop
    obj['prop'] */

}

pageInit()



