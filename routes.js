const router = require('express').Router()

const {
    getAllContacts,
    createContact,
    deleteContactById,
    updateContactById,
    findContactById,
    deleteSingleItem
} = require('./controllers')

router.get('/', getAllContacts)
router.get('/:id', findContactById)
router.post('/', createContact)
router.delete('/:id', deleteContactById)
router.put('/:id', updateContactById)
router.get('/delete/:id', deleteSingleItem)


module.exports = router