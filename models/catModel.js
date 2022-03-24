'use strict';
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const catSchema = new Schema({ //add filename
  name: {type: String, minlength:[2, 'Sorry, your cat cannot be called Z.']},
  birthdate: {type: Date, max: [Date.now, 'Sorry, your cat is not here yet.']},
  gender:{type: String, enum:['male', 'female']},
  color:{type:String},
  filename: {type:String},
  weight:{type:Number, min:[0, "Sorry, your cat is not heavy enough."], max:[20, "Sorry, your cat is too heavy."]}
})



const cats = [
  {
    id: '1',
    name: 'Frank',
    birthdate: '2010-10-30',
    weight: '5',
    owner: '1',
    filename: 'http://placekitten.com/400/300',
  },
  {
    id: '2',
    name: 'James',
    birthdate: '2015-12-25',
    weight: '11',
    owner: '2',
    filename: 'http://placekitten.com/400/302',
  },
];

const getCat = (catId) => {
  // TODO: return cat whose id is catId
  return cats.filter((item) => item.id === catId);
};

export { cats, getCat,  };

export default mongoose.model('Cat', catSchema);
