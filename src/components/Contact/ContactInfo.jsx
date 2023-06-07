
const ContactInfo = () => {
    return (
        <div className="grid sm:grid-cols-2  md:grid-cols-4 gap-10 max-w-[1140px]   mx-auto py-28 px-6">
            <div className="bg-[#FAFAFA] text-center px-4 py-8">
                <h1 className=" font-medium text-2xl    text-[#323232]">Address</h1>
                <p className="px-4 pb-10 text-gray">198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
            <div className="bg-[#FAFAFA] text-center px-4 py-8">
                <h1 className=" font-medium text-2xl     text-[#323232]">Contact Number</h1>
                <p>+ 1235 2355 98</p>
            </div>
            <div className="bg-[#FAFAFA] text-center px-4 py-8">
                <h1 className=" font-medium text-2xl    text-[#323232]">Email Address</h1>
                <p>info@yoursite.com</p>
            </div>
            <div className="bg-[#FAFAFA] text-center px-4 py-8">
                <h1 className=" font-medium text-2xl     text-[#323232]">Website</h1>
                <p>  yoursite.com </p>
            </div>
        </div>
    );
};

export default ContactInfo;