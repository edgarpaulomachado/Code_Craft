import { Card, CardContent } from "@/components/ui/card";
import { BadgeAlert, CreditCard, Wallet } from "lucide-react";

export default function PricingCard() {
  return (
    <Card className="md:w-150 w-auto border-orange-200 bg-white shadow-sm mt-10">
      <CardContent className="p-2">
          <h2 className="font-satoshi text-4xl font-bold text-black">
            12.000 Kz/<span className="mt-1 text-sm text-gray-500">por mês</span>
          </h2>
        
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-4 mt-2">
            <div className="flex items-start gap-3">
                <BadgeAlert
                    size={20}
                    className="mt-0.5 text-orange-500"
                />

                <p className="mt-1 text-sm text-orange-600">
                  Após o encerramento das candidaturas, será aplicado um
                  acréscimo ao valor da formação. Garanta a sua vaga
                  antecipadamente para beneficiar do preço atual.
                </p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}