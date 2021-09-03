const router = require('express').Router();
let Chapitre = require('../models/chapitre.model');

//get all
router.route('/').get((req, res)=>{
    Chapitre.find()
    .then(chapitres => res.json(chapitres))
    .catch(err => res.status(400).json('Error:' + err));
});

//post one
router.route('/add').post((req, res)=>{
    const description = req.body.description;
    const titre = req.body.titre;
    const sousChapitres = req.body.titre;
    const newChapitre = new Chapitre({titre, description, sousChapitres});

    newChapitre.save()
    .then(()=>res.json('Chapitre ajouté!'))
    .catch(err => res.status(400).json('Error:' + err));
});

//get one
router.route('/:id').get((req, res)=>{
    Chapitre.findById(req.params.id)
        .then(chapitres =>  res.json(chapitres))
        .catch(err => res.status(400).json('Error:' + err));
});

//delete one
router.route('/:id').delete((req, res)=>{
    Chapitre.findByIdAndDelete(req.params.id)
        .then(() => res.json('Chapitre supprimé.'))
        .catch(err => res.status(400).json('Error:' + err));
});

//update one
router.route('/update/:id').post((req, res)=>{
    chapitre.findById(req.params.id)
        .then(chapitre => {
            chapitre.titre = req.body.titre;
            chapitre.description = req.body.description;

            chapitre.save()
                .then(() => res.json("Chapitre modifié."))
                .catch(err => res.status(400).json("Error:" + err));
        })
        .catch(err => res.status(400).json("Error:" + err));
});

module.exports = router;
