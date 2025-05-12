import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from "next-intl";

const DonationForm = () => {
  const t = useTranslations("Donation");
  return (
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">
            {/* Make a Donation */}
            {t("donation-form-title")}
          </h2>
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="online" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="online">
                  {/* Online Donation */}
                  {t("donation-form-online-title")}
                </TabsTrigger>
                <TabsTrigger value="bank">
                  {/* Bank Transfer */}
                  {t("donation-form-bank-title")}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="online">
                <DonationForm />
              </TabsContent>

              <TabsContent value="bank">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">
                      {/* Bank Transfer Details */}
                      {t("donation-form-bank-transfer-title")}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {/* You can make a direct bank transfer to our account using the following details: */}
                      {t("donation-form-bank-transfer-description")}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">
                          {/* Account Name: */}
                          {t("donation-form-bank-transfer-account-name")}
                        </p>
                        <p className="text-muted-foreground">
                          {/* Rangraj Samaj Trust */}
                          {t("donation-form-bank-transfer-account-name-value")}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">
                          {/* Account Number: */}
                          {t("donation-form-bank-transfer-account-number")}
                        </p>
                        <p className="text-muted-foreground">
                          {/* 1234567890 */}
                          {/* {t("donation-form-bank-transfer-account-number-value")} */}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">
                          {/* Bank Name: */}
                          {t("donation-form-bank-transfer-bank-name")}
                        </p>
                        <p className="text-muted-foreground">
                          {/* State Bank of India */}
                          {t("donation-form-bank-transfer-bank-name-value")}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">
                          {/* IFSC Code: */}
                          {t("donation-form-bank-transfer-ifsc-code")}
                        </p>
                        <p className="text-muted-foreground">
                          {/* SBIN0001234 */}
                          {/* {t("donation-form-bank-transfer-ifsc-code-value")} */}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">
                          {/* Branch: */}
                          {t("donation-form-bank-transfer-branch")}
                        </p>
                        <p className="text-muted-foreground">
                          {/* Mumbai Main Branch */}
                          {t("donation-form-bank-transfer-branch-value")}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">
                          {/* Account Type: */}
                          {t("donation-form-bank-transfer-account-type")}
                        </p>
                        <p className="text-muted-foreground">
                          {/* Current Account */}
                          {t("donation-form-bank-transfer-account-type-value")}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="font-medium mb-2">
                        {/* Important Note: */}
                        {t("donation-form-bank-transfer-important-note")}
                      </p>
                      <p className="text-muted-foreground">
                        {/* After making the transfer, please send the transaction details to info@rangrajsamaj.org or
                        WhatsApp to +91 12345 67890 for receipt and acknowledgment. */}
                        {t("donation-form-bank-transfer-important-note-description")}
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
