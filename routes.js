const router = require('express').Router()

const {
    getAllContacts,
    createContact,
    deleteContactById,
    updateContactById,
    findContactById
} = require('./controllers')

router.get('/', getAllContacts)
router.get('/:id', findContactById)
router.post('/', createContact)
router.delete('/:id', deleteContactById)
router.put('/:id', updateContactById)

module.exports = router