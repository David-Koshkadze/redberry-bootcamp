import React, { useState } from "react";
import KnightCup from "../components/KnightCup";
import register_page from "../assets/images/register_page.png";
import Pager from "../components/Pager";
import { Link } from "react-router-dom";
import next_icon from "../assets/icons/next_icon.svg";
import Input from "../components/Input";
import {
  Formik,
  Form,
  Field,
  FormikProps,
  FormikConfig,
  FormikValues,
} from "formik";
import * as Yup from "yup";

interface Values {
  name: string;
  email: string;
  phone: string;
  date: string;
}

interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {}

const SignUpSchema = Yup.object().shape({
  name: Yup.string().min(3).max(20).required(),
  email: Yup.string().email("Should be email").required(),
  phone: Yup.string().min(3).required(),
  date: Yup.string().required(),
});

const FormikStepper = ({ children, ...props }: FormikConfig<FormikValues>) => {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[
    step
  ] as React.ElementType<FormikStepProps>;

  console.log("children", currentChild);

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (step === 1) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      <Form>
        {currentChild}

        <div className="flex justify-between mt-16 text-[20px]">
          {step === 0 ? (
            <Link
              to="/"
              className="px-[24px] py-[13px] border border-[#212529] rounded-lg bg-white hover:bg-gray-300"
            >
              Back
            </Link>
          ) : (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="px-[24px] py-[13px] border border-[#212529] rounded-lg bg-white hover:bg-gray-300"
            >
              Back
            </button>
          )}

          <button
            type="submit"
            className="px-[24px] py-[13px] rounded-lg bg-[#212529] text-white flex items-center gap-3 w-fit hover:outline outline-purple-400"
          >
            {step === 1 ? (
              <p>Done</p>
            ) : (
              <>
                <p>Next</p>
                <img
                  src={next_icon}
                  alt="next-btn"
                  className="w-[24px] h-[24px]"
                />
              </>
            )}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

const FormikStep = ({ children }: FormikConfig<FormikValues>) => {
  return <>{children}</>;
};

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
            <FormikStepper
              initialValues={{
                name: "",
                email: "",
                phone: "",
                date: "",
              }}
              onSubmit={(values) => alert(JSON.stringify(values))}
            >
              <FormikStep
                validationSchema={Yup.object().shape({
                  name: Yup.string().min(3).max(20).required(),
                  email: Yup.string().email("Should be email").required(),
                })}
              >
                <Field label="Name" name="name" as={Input} />
                <Field label="Email" name="email" type="email" as={Input} />
              </FormikStep>

              <FormikStep
                validationSchema={Yup.object().shape({
                  phone: Yup.string().min(3).required(),
                  date: Yup.string().required(),
                })}
              >
                <Field label="Phone" name="phone" as={Input} />
                <Field label="Date of birth" name="date" as={Input} />
              </FormikStep>
            </FormikStepper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
