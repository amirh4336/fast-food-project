// svg
import { Phone , Instagram } from '../../Assets/Logos/Logos.js';


export default function Footer() {
    
    return(
        <div className="Footer bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE] border-t-[1px] dark:border-slate-700 py-4 px-8 text-center">
            <h3 className="text-2xl">ارتباط با ما</h3>
            <div href="#" className="flex justify-between my-6">
                <div className="left-side">@pitzafarahzad</div>
                <div className="right-side flex">
                    <p className="mr-2">:اینستاگرام</p>
                    <div>
                        <Instagram />
                    </div>
                </div>
            </div>
            <div className="flex justify-between my-6">
                <div className="left-side flex flex-col space-y-3">
                    <a  href="tel:03432812006">034-32812006</a>
                    <a  href="tel:03432817817">034-32817817</a>
                    <a  href="tel:09393052266">09393052266</a>
                </div>
                <div className="right-side flex justify-center">
                    <p className="mr-2">:شماره تماس</p>
                    <div>
                        <Phone />
                    </div>
                </div>
            </div>
        </div>
    )
}