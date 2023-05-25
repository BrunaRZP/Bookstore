import ProductList from "../Products/ProductList";
// import SignUpBar from "../Bars/SignUpBar/SignUpBar";
// import Logo from "";
import { Footer1, Nav, H1, P, Ul, LiDiv, Li, FooterLink } from "./styles";

function Footer() {
    return (
        <Footer1>
            {/* <div>
                <img src={Provavel-logo} alt="" />
            </div> */}

            <Nav>
                <div>
                    <H1>Sign up for out newsletter</H1>
                    <P>Be the first to know about our special offers, new product launches, and events!</P>
                    {/* <SignUpBar onSearch={ProductList} /> */}
                </div>
                
                <div>
                    <Ul> Popular Categories
                        <LiDiv>
                            <Li><FooterLink texto="Children's" redirect="/" /></Li>
                        </LiDiv>
                        <Li><FooterLink texto="Teen and Young Adult" redirect="/"/></Li>
                        <Li><FooterLink texto="Self-Help" redirect="/"/></Li>
                        <Li><FooterLink texto="Literature & Fiction" redirect="/"/></Li>
                        <Li><FooterLink texto="Mystery & Thriller" redirect="/"/></Li>
                        <Li><FooterLink texto="Sci-fi & Fantasy" redirect="/"/></Li>
                        <Li><FooterLink texto="Romance" redirect="/"/></Li>
                        <Li><FooterLink texto="Large Print Books" redirect="/"/></Li>   
                        <Li><FooterLink texto="Rare & Collectible Books" redirect="/"/></Li>                                             
                    </Ul>
                </div>

                <div>
                    <Ul> Help
                        <LiDiv>
                            <Li><FooterLink texto="Help & Support" redirect="/"/></Li>
                        </LiDiv>
                        <Li><FooterLink texto="Shipping Costs" redirect="/"/></Li>
                        <Li><FooterLink texto="Billing" redirect="/"/></Li>
                        <Li><FooterLink texto="Retourn Policy" redirect="/"/></Li>
                        <Li><FooterLink texto="Website Suggestions" redirect="/"/></Li>
                    </Ul>
                </div>

                <div>
                    <Ul> About Us
                        <LiDiv>
                            <Li><FooterLink texto="Our Story" redirect="/"/></Li>
                        </LiDiv>
                        <Li><FooterLink texto="Our Purpose" redirect="/"/></Li>
                        <Li><FooterLink texto="Our Team" redirect="/"/></Li>
                        <Li><FooterLink texto="Social Responsibility" redirect="/"/></Li>
                        <Li><FooterLink texto="Careers" redirect="/"/></Li>
                        <Li><FooterLink texto="News" redirect="/"/></Li>
                        <Li><FooterLink texto="Testimonials" redirect="/"/></Li>
                    </Ul>
                </div>
            </Nav>

        </Footer1>
    );
}

export default Footer;