"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { CSSProperties } from "react";
import { motion } from "framer-motion";

interface StatisticCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change?: number;
  iconColor?: string;
  bgColor?: string;
  labelColor?: string;
  description?: string;
  decimal?: boolean;
  metric?: string;
  loading?: boolean;
}

export function StatisticCard({
                                title,
                                value,
                                icon: Icon,
                                change,
                                iconColor,
                                bgColor,
                                labelColor,
                                description,
                                decimal = false,
                                metric,
                                loading = false,
                              }: StatisticCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;
  const isNeutral = change === 0;

  const iconStyle: CSSProperties = {
    backgroundColor: bgColor || "var(--color-card)",
    color: iconColor || "var(--color-primary)",
  };

  return (
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <div
              className={cn("flex h-9 w-9 items-center justify-center rounded-full")}
              style={iconStyle}
          >
            <Icon className="h-5 w-5" />
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
              <div className="h-9 w-24 animate-pulse rounded-md bg-muted" />
          ) : (
              <div className="text-2xl font-bold">
                {decimal ? parseFloat(value).toFixed(2) : value}
                {metric && <span className="ml-1 text-xs font-normal">{metric}</span>}
              </div>
          )}
          {description && !loading && (
              <p className="text-xs text-muted-foreground">{description}</p>
          )}
          {typeof change !== "undefined" && !loading && (
              <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                      "mt-1 flex items-center text-xs",
                      isPositive && "text-emerald-500",
                      isNegative && "text-rose-500",
                      isNeutral && "text-muted-foreground"
                  )}
                  style={{ color: labelColor }}
              >
                {isPositive && "↑"}
                {isNegative && "↓"}
                {isNeutral && "="}
                <span className="ml-1">
              {Math.abs(change)}% par rapport à la période précédente
            </span>
              </motion.p>
          )}
        </CardContent>
      </Card>
  );
}
