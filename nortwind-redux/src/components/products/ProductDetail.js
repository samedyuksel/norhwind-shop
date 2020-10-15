import React from 'react'
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({categories, product, onSave, onChange, errors}) => {
    return (
        <form onSubmit={onSave}>
            <h2>{product.id? "Product Update" : "Product Add"}</h2>

            <TextInput name="productName" label="Product Name" value={product.productName} onChange={onChange} error={errors.productName}/>

            <SelectInput name="categoryId"
                         label="Category"
                         value={product.categoryId || ""}
                         defaultOption="Choose"
                         options={categories.map(category => ({
                             value: category.id,
                             text: category.categoryName
                         }))}
                         onChange={onChange}
                         error={errors.id}
            />

            <TextInput name="unitPrice" label="Unit Price" value={product.unitPrice} onChange={onChange} error={errors.unitPrice}/>
            <TextInput name="quantityPerUnit" label="Quantity per Unit" value={product.quantityPerUnit} onChange={onChange} error={errors.quantityPerUnit}/>
            <TextInput name="unitsInStock" label="Units in Stock" value={product.unitsInStock} onChange={onChange} error={errors.unitsInStock}/>

            <button type="submit" className="btn btn-outline-success">Save</button>
        </form>
    )
}

export default ProductDetail;