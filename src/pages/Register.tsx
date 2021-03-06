import React, { useEffect, useState } from "react";
import KnightCup from "../components/KnightCup";
import register_page from "../assets/images/register_page.png";
import third_image from "../assets/images/third_image.png";
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
import Completed from "../pages/Completed";

interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {}

type FormikStepperProps = FormikConfig<FormikValues> & {
  final: boolean;
};

const SignUpSchema = Yup.object().shape({
  name: Yup.string().min(3).max(20).required(),
  email: Yup.string().email("Should be email").required(),
  phone: Yup.string().min(3).required(),
  date: Yup.string().required(),
});

const FormikStepper = ({ children, final, ...props }: FormikStepperProps) => {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[
    step
  ] as React.ReactElement<FormikStepProps>;

  return (
    <>
      {final ? (
        <Completed />
      ) : (
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
          {(props) => (
            <Form {...props}>
              <div className="w-full h-screen flex">
                <div className="w-1/2 relative">
                  <KnightCup />
                  <img
                    src={step === 0 ? register_page : third_image}
                    alt="register_page"
                    className="object-cover h-auto w-full"
                  />
                  <div className="absolute top-64 left-28 text-[26px] [&>*]:mb-2 uppercase font-nunitoExtraBoldItalic">
                    {step === 0 ? (
                      <>
                        <p className="text-[#212529]">
                          ???When you see a good move,
                        </p>
                        <p className="text-[#212529]">
                          look for a better one.???
                        </p>
                        <p className="text-[#E5E6E8] font-nunitoItalic">
                          -Emanuel Lasker
                        </p>
                      </>
                    ) : (
                      <>
                        <p>???Many have become chess masters;</p>
                        <p>no one has become the master of chess.???</p>
                        <p className="text-right text-[#093F68] font-nunitoItalic">
                          -Siegbert Tarrasch
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="w-1/2">
                  <div className="w-full h-[84px] border border-b flex items-center px-10">
                    <p className="font-openSansSemiBold text-base">
                      {step === 0
                        ? "Start Creating Your Account"
                        : "First step is done, continue to finish onboarding"}
                    </p>
                  </div>

                  <div className="pl-10 pr-40 mt-12">
                    <Pager step={step} />
                    <div className="mt-20">
                      <h1 className="font-openSansSemiBold text-[32px]">
                        {step === 0
                          ? "Personal information"
                          : "Chess experience"}
                      </h1>
                      <span className="font-openSansSemiBold text-[14px] text-[#95939A]">
                        This is Basic Information Fields
                      </span>
                    </div>

                    <div className="mt-20 h-64 flex flex-col gap-4 font-openSans">
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
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

const FormikStep = ({ children }: FormikConfig<FormikValues>) => {
  return <>{children}</>;
};

const Register = () => {
  const [masters, setMasters] = useState<any[]>([]);
  const [final, setFinal] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://chess-tournament-api.devtest.ge/api/grandmasters")
      .then((res) => res.json())
      .then((data) => {
        setMasters(data);
        console.log(data);
      });
  }, []);

  const postData = async (values: FormikValues) => {
    const response = await fetch(
      "https://chess-tournament-api.devtest.ge/api/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
  };

  return (
    <FormikStepper
      initialValues={{
        name: "",
        email: "",
        phone: "",
        date_of_birth: "",
        experience_level: "",
        already_participated: null,
        character_id: 2,
      }}
      onSubmit={(values) => {
        postData(values);
        setFinal(true);
      }}
      final={final}
    >
      <FormikStep
        validationSchema={Yup.object().shape({
          name: Yup.string().min(3).max(20).required(),
          email: Yup.string().email("Should be email").required(),
          phone: Yup.string().min(3).required(),
          date_of_birth: Yup.string().required(),
        })}
      >
        <Field label="Name" name="name" as={Input} />
        <Field label="Email" name="email" type="email" as={Input} />
        <Field label="Phone" name="phone" as={Input} />
        <Field label="Date of birth" name="date_of_birth" as={Input} />
      </FormikStep>

      <FormikStep
        validationSchema={Yup.object().shape({
          experience_level: Yup.string().required(),
          character_id: Yup.number().required(),
          already_participated: Yup.bool().required(),
        })}
      >
        <div className="flex">
          <Field as="select" name="experience_level">
            <option value="" disabled>
              Experience Level
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Field>

          <Field as="select" name="character_id">
            <option value="" disabled>
              Choose Your Character
            </option>
            {masters.map((master) => (
              <option key={master.id} value={master.id}>
                {master.name}
              </option>
            ))}
          </Field>
        </div>

        <div className="font-openSans text-xl mb-4">
          Have you participated in the Redberry Championship?{" "}
          <span className="text-red-600">*</span>
        </div>
        <div
          role="group"
          aria-labelledby="radio-gorup"
          className="flex gap-5 text-base "
        >
          <label className="flex align-center gap-3">
            <Field
              type="radio"
              name="already_participated"
              value="true"
              className="w-5"
            />
            <span>Yes</span>
          </label>

          <label className="flex align-center gap-3">
            <Field
              type="radio"
              name="already_participated"
              value="false"
              className="w-5"
            />
            <span>No</span>
          </label>
        </div>
      </FormikStep>
    </FormikStepper>
  );
};

export default Register;
