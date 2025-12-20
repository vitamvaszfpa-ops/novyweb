import { useState } from "react";
import { TrendingUp } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

type CalculationType = "future-value" | "monthly-deposit";

const InvestmentCalculator = () => {
  const [calculationType, setCalculationType] = useState<CalculationType>("future-value");
  const [monthlyDeposit, setMonthlyDeposit] = useState<string>("");
  const [targetAmount, setTargetAmount] = useState<string>("");
  const [annualReturn, setAnnualReturn] = useState<string>("6");
  const [investmentYears, setInvestmentYears] = useState<string>("20");
  const [result, setResult] = useState<string>("");
  const [calculated, setCalculated] = useState(false);

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat("cs-CZ").format(Math.round(num));
  };

  const parseNumber = (str: string): number => {
    return parseFloat(str.replace(/\s/g, "").replace(",", ".")) || 0;
  };

  const formatInputNumber = (value: string): string => {
    const cleanValue = value.replace(/[^\d]/g, "");
    if (!cleanValue) return "";
    const number = parseInt(cleanValue, 10);
    return new Intl.NumberFormat("cs-CZ").format(number);
  };

  const handleMonthlyDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonthlyDeposit(formatInputNumber(e.target.value));
  };

  const handleTargetAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetAmount(formatInputNumber(e.target.value));
  };

  const calculateInvestment = () => {
    const rate = parseNumber(annualReturn) / 100;
    const years = parseNumber(investmentYears);
    const monthlyRate = rate / 12;
    const months = years * 12;

    if (calculationType === "future-value") {
      // Kolik budu mít při pravidelném ukládání
      const deposit = parseNumber(monthlyDeposit);
      if (deposit > 0 && rate > 0 && years > 0) {
        // Future Value of Annuity formula
        const futureValue = deposit * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
        const totalDeposited = deposit * months;
        const earnings = futureValue - totalDeposited;
        
        setResult(
          `Za ${years} let při měsíčním vkladu ${formatNumber(deposit)} Kč naspoříte přibližně ${formatNumber(futureValue)} Kč. ` +
          `Z toho ${formatNumber(totalDeposited)} Kč jsou vaše vklady a ${formatNumber(earnings)} Kč jsou výnosy.`
        );
      } else {
        setResult("Zadejte prosím platné hodnoty.");
      }
    } else {
      // Kolik musím spořit pro cílovou částku
      const target = parseNumber(targetAmount);
      if (target > 0 && rate > 0 && years > 0) {
        // Payment for Future Value of Annuity
        const requiredMonthly = target / ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
        const totalDeposited = requiredMonthly * months;
        const earnings = target - totalDeposited;
        
        setResult(
          `Pro dosažení ${formatNumber(target)} Kč za ${years} let potřebujete spořit přibližně ${formatNumber(requiredMonthly)} Kč měsíčně. ` +
          `Z toho ${formatNumber(totalDeposited)} Kč budou vaše vklady a ${formatNumber(earnings)} Kč budou výnosy.`
        );
      } else {
        setResult("Zadejte prosím platné hodnoty.");
      }
    }

    setCalculated(true);
  };

  const resetCalculator = () => {
    setCalculationType("future-value");
    setMonthlyDeposit("");
    setTargetAmount("");
    setAnnualReturn("6");
    setInvestmentYears("20");
    setResult("");
    setCalculated(false);
  };

  return (
    <Dialog onOpenChange={(open) => !open && resetCalculator()}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <TrendingUp className="w-4 h-4" />
          Investiční kalkulačka
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[520px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif">
            Investiční kalkulačka
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Výpočet se složeným (efektivním) úročením.
          </p>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label>Co chci počítat</Label>
            <Select 
              value={calculationType} 
              onValueChange={(v) => setCalculationType(v as CalculationType)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="future-value">Kolik budu mít při ukládání</SelectItem>
                <SelectItem value="monthly-deposit">Kolik musím spořit pro cíl</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {calculationType === "future-value" ? (
              <div className="space-y-2">
                <Label htmlFor="deposit">Měsíční vklad</Label>
                <Input
                  id="deposit"
                  placeholder="např. 3 000"
                  value={monthlyDeposit}
                  onChange={handleMonthlyDepositChange}
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="target">Cílová částka</Label>
                <Input
                  id="target"
                  placeholder="např. 1 000 000"
                  value={targetAmount}
                  onChange={handleTargetAmountChange}
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="return">Roční zhodnocení (%)</Label>
              <Input
                id="return"
                placeholder="např. 6"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="years">Doba investování (roky)</Label>
              <Input
                id="years"
                placeholder="např. 20"
                value={investmentYears}
                onChange={(e) => setInvestmentYears(e.target.value)}
              />
            </div>
            {calculationType === "monthly-deposit" && (
              <div className="space-y-2 opacity-50">
                <Label>Měsíční vklad</Label>
                <div className="h-10 flex items-center text-sm text-muted-foreground">
                  Bude vypočítán
                </div>
              </div>
            )}
            {calculationType === "future-value" && (
              <div className="space-y-2 opacity-50">
                <Label>Cílová částka</Label>
                <div className="h-10 flex items-center text-sm text-muted-foreground">
                  Bude vypočítána
                </div>
              </div>
            )}
          </div>

          {calculated && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="font-medium mb-2">Výsledek:</p>
              <p className="text-sm text-foreground">{result}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <Button variant="cta" onClick={calculateInvestment} className="w-full">
            Spočítat
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link to="/kontakt">Chci investiční plán na míru</Link>
          </Button>
        </div>

        {/* EU Compliance Disclaimer */}
        <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-border/50">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Upozornění:</strong> Tato kalkulačka slouží pouze pro orientační účely a nepředstavuje 
            investiční poradenství ani doporučení. Minulé výnosy nejsou zárukou výnosů budoucích. 
            Hodnota investice může klesat i stoupat a návratnost původně investované částky není zaručena. 
            Před jakýmkoliv investičním rozhodnutím se poraďte s kvalifikovaným finančním poradcem. 
            Informace zde uvedené nepředstavují nabídku k nákupu ani prodeji finančních nástrojů 
            ve smyslu směrnice MiFID II (2014/65/EU).
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvestmentCalculator;
