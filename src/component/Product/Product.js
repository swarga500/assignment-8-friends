import React from 'react';
import './Product.css'

const Product = (props) => {
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
                    <button className="btn-warning btn" onClick={() => props.cartButton(props.product)}>
                        <i className="fas text-light fa-shopping-cart"></i> Add to cart</button>
                     <br />
                     <span>
                     <i className="fab fa-facebook-square fs-3 fw-bold mt-3 text-success ms-2"></i> 
                     <i class="fab fa-instagram fs-3 fw-bold mt-3 text-success ms-2"></i>
                     <i class="fab fa-twitter-square fs-3 fw-bold mt-3 text-success ms-2"></i>
                     </span>   
                </div>
           </div>

        </div>
    );
};

export default Product;