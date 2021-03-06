// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
return {'id': id, 'nameFirst': nameFirst, 'nameLast': nameLast}
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //create addContact function with 1 perameter. contact.
        addContact: function(contact){
            contacts.push(contact);
        },
        
        findContact: function(fullName){
            var contact;
            //search through contacts using a for loop
            for(let i = 0; i < contacts.length; i++){
                //if contacts first name and last name together matches the fullName
                if( (contacts[i].nameFirst + ' ' + contacts[i].nameLast) === fullName){
                    //set matching contact to the empty contact var
                    contact = contacts[i];
                }
            }
            //return matching contact
            return contact;
        },
        
        removeContact: function(contact){
            //filter out contacts
            contacts = contacts.filter(item => item !== contact);
        },
        
        printAllContactNames: function(){
            var contactList = '';
            //search through the contact list 
            for(let i = 0; i < contacts.length; i++){
                //concatenate each contacts full name to contact list with a new line character
                contactList += (contacts[i].nameFirst + ' ' + contacts[i].nameLast) + '\n';
            }
            //remove last character because there would be an extra new line character
            contactList = contactList.slice(0, -1);
            //return the list of all contact names
            return contactList;
        },
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
