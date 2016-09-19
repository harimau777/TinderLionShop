const checkout = () => {
  <form>
    <div class="billingInfo">
      <label>First Name</label> <input type=text name="billingFName"></input>
      <label>Last Name</label> <input type=text name="billingLName"></input>
      <label>Address 1</label> <input type=text name="billingAddr1"></input>
      <label>Address 2</label> <input type=text name="billingAddr2"></input>
      <label>City</label> <input type=text name="billingCity"></input>
      <label>State</label> <input type=dropDown name="billingState"></input>
      <label>Zip Code</label> <input type=text name="billingZip"></input>

      <label>Credit Card Number</label> <input type=text name="billingCardNumber"></input>
      <label>Expiration Date</label> <input type=text name="billingExprDate"></input>
      <label>Security Code</label> <input type=text name="billingSecurityCode"></input>
    </div>

    <div class="shippingInfo">
      <label>First Name</label> <input type=text name="billingFName"></input>
      <label>Last Name</label> <input type=text name="billingLName"></input>
      <label>Address 1</label> <input type=text name="billingAddr1"></input>
      <label>Address 2</label> <input type=text name="billingAddr2"></input>
      <label>City</label> <input type=text name="billingCity"></input>
      <label>State</label> <input type=dropDown name="billingState"></input>
      <label>Zip Code</label> <input type=text name="billingZip"></input>
    </div>

    <input type="submit" class="submitButton">Submit</input>
  </form>
};
