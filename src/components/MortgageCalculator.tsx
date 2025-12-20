import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const MortgageCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<string>("");
  const [currentPayments, setCurrentPayments] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("5,5");
  const [loanTerm, setLoanTerm] = useState<string>("30");
  const [maxPayment, setMaxPayment] = useState<number>(0);
  const [maxMortgage, setMaxMortgage] = useState<number>(0);
  const [calculated, setCalculated] = useState(false);

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat("cs-CZ").format(Math.round(num));
  };

  const parseNumber = (str: string): number => {
    return parseFloat(str.replace(/\s/g, "").replace(",", ".")) || 0;
  };

  // Format input with thousand separators
  const formatInputNumber = (value: string): string => {
    // Remove all non-numeric characters except comma
    const cleanValue = value.replace(/[^\d]/g, "");
    if (!cleanValue) return "";
    
    // Format with thousand separators
    const number = parseInt(cleanValue, 10);
    return new Intl.NumberFormat("cs-CZ").format(number);
  };

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatInputNumber(e.target.value);
    setMonthlyIncome(formatted);
  };

  const handlePaymentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatInputNumber(e.target.value);
    setCurrentPayments(formatted);
  };

  const calculateMortgage = () => {
    const income = parseNumber(monthlyIncome);
    const payments = parseNumber(currentPayments);
    const rate = parseNumber(interestRate);
    const years = parseNumber(loanTerm);

    // DTSI pravidlo - max 45% z čistého příjmu na splátky
    const maxMonthlyPayment = income * 0.45 - payments;
    setMaxPayment(Math.max(0, maxMonthlyPayment));

    // Výpočet maximální výše hypotéky
    if (maxMonthlyPayment > 0 && rate > 0 && years > 0) {
      const monthlyRate = rate / 100 / 12;
      const numberOfPayments = years * 12;
      
      // Vzorec pro výpočet jistiny z měsíční splátky
      const principal = maxMonthlyPayment * 
        ((Math.pow(1 + monthlyRate, numberOfPayments) - 1) / 
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)));
      
      setMaxMortgage(Math.max(0, principal));
    } else {
      setMaxMortgage(0);
    }

    setCalculated(true);
  };

  const resetCalculator = () => {
    setMonthlyIncome("");
    setCurrentPayments("");
    setInterestRate("5,5");
    setLoanTerm("30");
    setMaxPayment(0);
    setMaxMortgage(0);
    setCalculated(false);
  };

  return (
    <Dialog onOpenChange={(open) => !open && resetCalculator()}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Calculator className="w-4 h-4" />
          Spočítat hypotéku
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif">
            Orientační hypoteční kalkulačka
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Výpočet dle příjmů, závazků a pravidla DTSI (orientačně).
          </p>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="income">Čistý měsíční příjem</Label>
              <Input
                id="income"
                placeholder="např. 55 000"
                value={monthlyIncome}
                onChange={handleIncomeChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="payments">Současné měsíční splátky</Label>
              <Input
                id="payments"
                placeholder="např. 5 000"
                value={currentPayments}
                onChange={handlePaymentsChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="rate">Úroková sazba (%)</Label>
              <Input
                id="rate"
                placeholder="např. 5,5"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="term">Doba splatnosti (roky)</Label>
              <Input
                id="term"
                placeholder="např. 30"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>
          </div>

          {calculated && (
            <div className="mt-4 p-4 bg-muted rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Max. měsíční splátka:</span>
                <span className="font-semibold text-primary">
                  {formatNumber(maxPayment)} Kč
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Odhad max. výše hypotéky:</span>
                <span className="font-semibold text-primary">
                  {formatNumber(maxMortgage)} Kč
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <Button variant="cta" onClick={calculateMortgage} className="w-full">
            Spočítat orientačně
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link to="/kontakt">Chci spočítat možnosti na míru</Link>
          </Button>
        </div>

        {/* EU Compliance Disclaimer */}
        <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-border/50">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Upozornění:</strong> Tato kalkulačka slouží pouze pro orientační účely a nepředstavuje 
            závaznou nabídku financování. Skutečné podmínky hypotečního úvěru se mohou lišit v závislosti 
            na individuálním posouzení bonity, hodnotě zajištění a aktuálních podmínkách bank. Výpočet 
            vychází z pravidla DSTI (poměr dluhové služby k příjmu) a nezohledňuje všechny faktory 
            ovlivňující schválení úvěru. Před podáním žádosti o hypotéku se poraďte s kvalifikovaným 
            finančním poradcem. Informace zde uvedené nepředstavují nabídku k uzavření smlouvy 
            ve smyslu zákona č. 257/2016 Sb., o spotřebitelském úvěru.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MortgageCalculator;
