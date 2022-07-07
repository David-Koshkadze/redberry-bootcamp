import KnightCup from "../components/KnightCup";
import register_page from "../assets/images/register_page.png";
import Pager from "../components/Pager";
import { Link } from "react-router-dom";
import next_icon from "../assets/icons/next_icon.svg";
import Input from "../components/Input";
import { Formik, Form, FormikProps, Field } from "formik";
import * as Yup from "yup";

interface Values {
  name: string;
  email: string;
  date: string;
}

const SignUpSchema = Yup.object().shape({
  name: Yup.string().min(3).max(20).required(),
  email: Yup.string().email("Should be email").required(),
  date: Yup.string().required()
});

const Register = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 relative">
        <KnightCup />
        <img
          src={register_page}
          alt="register_page"
          className="object-cover h-auto w-full"
        />
        <div className="absolute top-64 left-28 text-[26px] [&>*]:mb-2 font-nunitoExtraBoldItalic">
          <p className="uppercase text-[#212529]">“When you see a good move,</p>
          <p className="uppercase text-[#212529]">look for a better one.”</p>
          <p className="uppercase text-[#E5E6E8] font-nunitoItalic">
            -Emanuel Lasker
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <div className="w-full h-[84px] border border-b flex items-center px-10">
          <p className="font-openSansSemiBold text-base">
            Start Creating Your Account
          </p>
        </div>

        <div className="pl-10 pr-40 mt-12">
          <Pager />
          <div className="mt-20 border">
            <h1 className="font-openSansSemiBold text-[32px]">
              Personal Information
            </h1>
            <span className="font-openSansSemiBold text-[14px] text-[#95939A]">
              This is Basic Information Fields
            </span>
          </div>

          <div className="mt-20 h-64 flex flex-col gap-4 font-openSans">
            <Formik
              initialValues={{
                name: "",
                email: "",
                date: ""
              }}
              onSubmit={(values) => alert(JSON.stringify(values))}
              validationSchema={SignUpSchema}
            >
              {(props: FormikProps<Values>) => (
                <Form>
                  <Input label="Name" name="name" type="text" />
                  <Input label="Email" name="email" type="email" />
                  <Input label="Date of birth" name="date" type="text" />

                  <pre>{JSON.stringify(props.values)}</pre>

                  <div className="flex justify-between mt-16 text-[20px]">
                    <Link
                      to="/"
                      className="px-[24px] py-[13px] border border-[#212529] rounded-lg bg-white hover:bg-gray-300"
                    >
                      Back
                    </Link>

                    <button
                      type="submit"
                      className="px-[24px] py-[13px] rounded-lg bg-[#212529] text-white flex items-center gap-3 w-fit hover:outline outline-purple-400"
                    >
                      <p>Next</p>
                      <img
                        src={next_icon}
                        alt="next-btn"
                        className="w-[24px] h-[24px]"
                      />
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
