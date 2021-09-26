import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {title,age,img,job,salary,company} = props.product;
    
    return (
        <div className="col">
            
           <div className="shadow round bg-light">
           
                <img height="380px" className="card-img-top round p-2" src={img} />
                
                <div className="card-body">
                    <h6 className="card-title"><span className="text-success fw-bold fs-5">Name : </span>{title}</h6>
                    <h6><span className="text-success fw-bold fs-5">Age : </span>{age}</h6>
                    <h6><span className="text-success fw-bold fs-5">Job : </span> {job}</h6>
                    <h6><span className="text-success fw-bold fs-5">Company : </span>{company}</h6>
                    <h6><span className="text-success fw-bold fs-5">Salary : </span> {salary}Tk</h6>
                    <button className="btn-warning btn" onClick={() => props.cartButton(props.product)}><i class="fas text-light fa-shopping-cart"></i> Add to cart</button>
                </div>
           </div>

        </div>
    );
};

export default Product;