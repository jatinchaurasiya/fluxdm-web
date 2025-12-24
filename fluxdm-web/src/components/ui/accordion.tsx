import * as React from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const Accordion = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { type?: "single" | "multiple"; collapsible?: boolean }
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-2", className)} {...props} />
))
Accordion.displayName = "Accordion"

const AccordionContext = React.createContext<{
    activeItem: string | undefined;
    setActiveItem: (value: string | undefined) => void;
}>({ activeItem: undefined, setActiveItem: () => { } })

const AccordionItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <AccordionContext.Provider
            value={{
                activeItem: isOpen ? value : undefined,
                setActiveItem: (v) => setIsOpen(v === value)
            }}
        >
            <div
                ref={ref}
                className={cn("border-b", className)}
                {...props}
            >
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        // @ts-expect-error - Cloning element to pass props
                        return React.cloneElement(child, { value, isOpen, setIsOpen })
                    }
                    return child;
                })}
            </div>
        </AccordionContext.Provider>
    )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & { value?: string; isOpen?: boolean; setIsOpen?: (v: boolean) => void }
>(({ className, children, isOpen, setIsOpen, ...props }, ref) => (
    <div className="flex">
        <button
            ref={ref}
            onClick={() => setIsOpen && setIsOpen(!isOpen)}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown
                className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen ? "rotate-180" : "")}
            />
        </button>
    </div>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { isOpen?: boolean }
>(({ className, children, isOpen, ...props }, ref) => (
    <AnimatePresence initial={false}>
        {isOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden text-sm"
            >
                <div ref={ref} className={cn("pb-4 pt-0", className)} {...props}>
                    {children}
                </div>
            </motion.div>
        )}
    </AnimatePresence>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
