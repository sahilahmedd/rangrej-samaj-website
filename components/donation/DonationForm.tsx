import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";

const DonationForm = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">
          Make a Donation
        </h2>
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="online" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="online">Online Donation</TabsTrigger>
              <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
            </TabsList>

            <TabsContent value="online">
              <DonationForm />
            </TabsContent>

            <TabsContent value="bank">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Bank Transfer Details</h3>
                  <p className="text-muted-foreground mb-4">
                    You can make a direct bank transfer to our account using the
                    following details:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Account Name:</p>
                      <p className="text-muted-foreground">
                        Rangraj Samaj Trust
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Account Number:</p>
                      <p className="text-muted-foreground">1234567890</p>
                    </div>
                    <div>
                      <p className="font-medium">Bank Name:</p>
                      <p className="text-muted-foreground">
                        State Bank of India
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">IFSC Code:</p>
                      <p className="text-muted-foreground">SBIN0001234</p>
                    </div>
                    <div>
                      <p className="font-medium">Branch:</p>
                      <p className="text-muted-foreground">
                        Mumbai Main Branch
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Account Type:</p>
                      <p className="text-muted-foreground">Current Account</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="font-medium mb-2">Important Note:</p>
                    <p className="text-muted-foreground">
                      After making the transfer, please send the transaction
                      details to info@rangrajsamaj.org or WhatsApp to +91 12345
                      67890 for receipt and acknowledgment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;
