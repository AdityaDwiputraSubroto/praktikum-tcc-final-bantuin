import Supplier from "../models/SupplierModel.js";

export const getSuppliers = async(req, res) =>{
    try {
        const response = await Supplier.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSupplierById = async(req, res) =>{
    try {
        const response = await Supplier.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createSupplier = async(req, res) =>{
    try {
        await Supplier.create(req.body);
        res.status(201).json({msg: "Supplier Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateSupplier = async(req, res) =>{
    try {
        await Supplier.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Supplier Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteSupplier = async(req, res) =>{
    try {
        await Supplier.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Supplier Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}