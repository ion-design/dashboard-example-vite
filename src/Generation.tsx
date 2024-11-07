// Generated with Ion on 11/7/2024, 3:42:37 PM
    // Figma Link: https://www.figma.com/design/GzGS1XBtO8fnXGsjKDPiIf?node-id=495:5591
    "use client";
    import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
    import { type MouseEvent, useState } from "react";

    import Avatar from "@/components/ion/Avatar";
    import Button from "@/components/ion/Button";
    import Divider from "@/components/ion/Divider";
    import Input from "@/components/ion/Input";
    import Textarea from "@/components/ion/Textarea";

    function ContactInformationCard() {
      const [address, setAddress] = useState("");
      const [emailAddress, setEmailAddress] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");

      function applyChangesClickHandler(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const requestData = {
          address,
          emailAddress,
          phoneNumber,
        };

        console.log("Sending data to API:", requestData);

        // Simulate an API request
        setTimeout(() => {
          console.log("API request successful:", requestData);
          alert("Changes applied successfully!");
        }, 1000);
      }

      function discardClickHandler(e: MouseEvent<HTMLButtonElement>) {
        alert("discardClickHandler fired");
      }

      return (
        <div className="bg-white w-[400px] flex flex-col justify-center items-center gap-5 p-5 rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
          <div className="w-fit flex flex-col items-center gap-4">
            <Avatar
              subtitle="Enter your contact details for communication."
              title="Contact Information"
              size="md"
              topStatus="plus"
            />
            <Divider />
            <Input
              placeholder="samraaj@ion.design"
              iconLeading={<EnvelopeSimple size={16} weight={"regular"} />}
              required
              label="Email Address"
              showHintIcon
              hint="Work email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="w-full"
            />
            <Input
              placeholder="samraaj@ion.design"
              iconLeading={<Phone size={16} weight={"bold"} />}
              required
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full"
            />
            <Textarea
              placeholder="301 main st"
              required
              helper="(Mailing)"
              label="Address"
              showHintIcon
              hint="Needed for HR records"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full"
            />
            <div className="w-full flex items-center gap-5">
              <Button
                variant="soft"
                color="neutral"
                size="md"
                onClick={discardClickHandler}
                className="w-full"
              >
                Discard
              </Button>
              <Button
                variant="filled"
                color="primary"
                size="md"
                onClick={applyChangesClickHandler}
                className="w-full"
              >
                Apply Changes
              </Button>
            </div>
          </div>
        </div>
      );
    }
    export default ContactInformationCard;
