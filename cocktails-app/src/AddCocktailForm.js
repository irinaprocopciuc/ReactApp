import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import './style/general.css';
import './style/form.css';
import './style/list.css';
const AddCocktailForm = () => {
    return (
      <>
        <div className="generailTitleStyle">
          <h1>Cocktails</h1>
          <Link to="/cocktails">
            <button className="buttonStyle">Back to list</button>
          </Link>
        </div>
        <div className="fromContainer">
          <h1>Deatils for the new cocktail</h1>
          <Formik
            initialValues={{
              idCocktail: "",
              cocktailName: "",
              ingredients: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form className="formStyle">
              <div className="filedGroup">
                <label htmlFor="idCocktail">Cocktail Id</label>
                <Field className="inputStyle" id="idCocktail" name="idCocktail" placeholder="123" />
              </div>

             <div className="filedGroup">
                <label htmlFor="cocktailName"> Name</label>
                <Field className="inputStyle" id="cocktailName" name="cocktailName" placeholder="Margarita" />
             </div>

             <div className="filedGroup"> 
                <label htmlFor="ingredients">Email</label>
                <Field className="inputStyle" id="ingredients" name="ingredients" placeholder="vodka, rum,.."/>
             </div>
              <button className="buttonStyle" type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </>
    );
}

export default AddCocktailForm;