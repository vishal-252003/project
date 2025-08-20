import '../models/connection.js';
import url from 'url';
import path from 'path';
import rs from 'randomstring';


import SubCategorySchemaModel from '../models/subcategory.model.js';
import AddTenderSchemaModel from '../models/addtender.model.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const save = async (req, res) => {

  var atList = await AddTenderSchemaModel.find();
  var l = atList.length;
  var _id = l == 0 ? 1 : atList[l - 1]._id + 1;

  var caticon = req.files.caticon;
 var quotationiconnm=rs.generate()+"-"+Date.now()+"-"+caticon.name;
  var uploadpath = path.join(__dirname, "../../UI/public/assests/uploads/quotationicons", quotationiconnm);

  var atDetails = { ...req.body, "quotationiconnm": quotationiconnm, "_id": _id , "info":Date() };
  try {
    await AddTenderSchemaModel.create(atDetails);
    caticon.mv(uploadpath);
    res.status(201).json({ "status": true });
  }
  catch (error) {
    res.status(500).json({ "status": false });
  }
    
};

export var fetch = async (req, res) => {
  var condition_obj = url.parse(req.url, true).query;
  var atList = await AddTenderSchemaModel.find(condition_obj);
  if (atList.length != 0)
    res.status(200).json(atList);
  else
    res.status(404).json({ "status": "Resource not found" });
};

export var update = async (req, res) => {
  let atDetails = await AddTenderSchemaModel.findOne(req.body.condition_obj);
  if (atDetails) {
    let at = await AddTenderSchemaModel.updateOne(req.body.condition_obj, { $set: req.body.content_obj });
    if (at)
      res.status(200).json({ "status": "success" });
    else
      res.status(500).json({ "status": "Server Error" });
  }
  else
    res.status(404).json({ "status": "Requested resource not available" });
};

export var deleteTender = async (req, res) => {
  let atDetails = await AddTenderSchemaModel.findOne(req.body.condition_obj);
  if (atDetails) {
    let at = await AddTenderSchemaModel.deleteOne(req.body.condition_obj);
    if (at)
      res.status(200).json({ "status": "success" });
    else
      res.status(500).json({ "status": "Server Error" });
  }
  else
    res.status(404).json({ "status": "Requested resource not available" });
};    