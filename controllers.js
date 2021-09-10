const Contact = require('./Contact')

exports.getAllContacts = (req, res) => {
    Contact.find()
        .then(contacts => {
            // contact.length === 0 ? res.json({ msg: 'No contacts found' })
            //     : res.json(contact) // check database is empty or not

            res.render('index', { contacts })
        })
        .catch(err => res.json({ message: "Somthing Went wrong Please use valid url...!" }))
}

exports.createContact = (req, res) => {
    let { name, email, phone, id } = req.body

    if (id) {
        Contact.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    name, email, phone
                }
            }
        )
        .then(()=>{
            Contact.find()
                .then(contacts => {res.render('index', { contacts })})
                .catch(e => {
                    return res.json({
                        message: 'Error Occurred'
                    })
                })
        })
        
    } else{
        let contact = new Contact({
            name,
            email,
            phone
        })
        contact.save()
            .then(c => {
                Contact.find()
                    .then(contacts => res.render('index', { contacts }))
            })
            .catch(e => {
                return res.json({
                    message: 'Error Occurred'
                })
            })
    }
  
}

exports.deleteContactById = (req, res) => {
    let id = req.params.id
    Contact.findByIdAndDelete(id)
        .then(c => {
            res.end(c)
        })
        .catch(err => { res.json({ message: err }) })
}

exports.deleteSingleItem = (req, res) => {
    let id = req.params.id
    Contact.findOneAndDelete({ id: id })
        .then(() => {
            Contact.find()
                .then(contacts => res.render('index', { contacts }))
        })
        .catch(err => {
            res.json({ message: err })
        })
}

exports.updateContactById = (req, res) => {
    let id = req.params.id
    let { name, email, phone } = req.body
    Contact.findOneAndUpdate(
        { _id: id },
        {
            $set:
            {
                name: name,
                email: email,
                phone: phone
            }
        }, { new: true }
    )
        .then(c => res.json(c))
        .catch(err => { res.json({ message: err }) })
}

exports.findContactById = (req, res) => {
    let id = req.params.id
    Contact.findById(id)
        .then(c => res.json(c))
        .catch(c => { res.json({ message: "Somthing Went wrong Please use valid url...!" }) })
}