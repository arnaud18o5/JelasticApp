'use strict';
//import { cats, getCat } from '../models/catModel';
import Cat from '../models/catModel';

const cat_get_with_gwa = async(req, res) => {
  console.log(req.query);
  res.json(await Cat.find({hidden: false}).where('gender').gt(req.query.weight));
}

const cat_get = async (req, res) => {
  console.log("request get /:id")
  res.json(await Cat.findById(req.query.id));
};

const cat_list_get = async (req, res) => {
  console.log(req.query);
  console.log("request get /")
  res.json(await Cat.find());
  //res.json(req.query);
};





const cat_post = async (req, res) => {
    if (!req.file) {
      throw Error("FILE_MISSING");
    } else {
      console.log(req.file)
      const newCat = await Cat.create({
        name: req.body.name,
        birthdate:req.body.birthdate,
        gender: req.body.gender,
        color: req.body.color,
        filename: req.file.filename,
        weight: req.body.weight
      }) 
      res.send(newCat);
    }
}



export { cat_list_get, cat_get, cat_post, cat_get_with_gwa };
