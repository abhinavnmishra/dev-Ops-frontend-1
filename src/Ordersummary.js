import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
const Ordersummary = () =>{
    return(
        <div class="container-fluid table-responsive">
      <a href="#update" class="btn btn-light mt-3">UPDATE MENU</a>
      <br /><br />
      <h3>ORDER SUMMARY</h3>

      <table class="table table-bordered">
        <thead>
          <th>SR.NO</th>
          <th>Food Item</th>
          <th>Amount</th>
          <th>Quantity</th>
          <th>Total Sales Value</th>
          <th>Details</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Veg Biryani</td>
            <td>180</td>
            <td>2</td>
            <td>360</td>
            <td><a href="#view" class="btn btn-danger">View</a></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Veg Biryani</td>
            <td>180</td>
            <td>2</td>
            <td>360</td>
            <td><a href="#view" class="btn btn-danger">View</a></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Veg Biryani</td>
            <td>180</td>
            <td>2</td>
            <td>360</td>
            <td><a href="#view" class="btn btn-danger">View</a></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Veg Biryani</td>
            <td>180</td>
            <td>2</td>
            <td>360</td>
            <td><a href="#view" class="btn btn-danger">View</a></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Veg Biryani</td>
            <td>180</td>
            <td>2</td>
            <td>360</td>
            <td><a href="#view" class="btn btn-danger">View</a></td>
          </tr>
        </tbody>
      </table>
      <h3>Total Sales=</h3>
      </div>
    )
}

export default Ordersummary;