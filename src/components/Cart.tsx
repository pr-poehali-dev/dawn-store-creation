import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import type { CartItem } from "@/pages/Index";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

const Cart = ({
  isOpen,
  onClose,
  items,
  onRemove,
  onUpdateQuantity,
}: CartProps) => {
  const total = items.reduce((sum, item) => {
    const price = item.discount
      ? Math.round(item.price * (1 - item.discount / 100))
      : item.price;
    return sum + price * item.quantity;
  }, 0);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Icon name="ShoppingCart" size={20} />
            Корзина ({totalItems})
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full mt-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <Icon
                name="ShoppingCart"
                size={48}
                className="text-gray-300 mb-4"
              />
              <p className="text-gray-500 mb-2">Корзина пуста</p>
              <p className="text-sm text-gray-400">
                Добавьте товары из каталога
              </p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4">
                {items.map((item) => {
                  const discountedPrice = item.discount
                    ? Math.round(item.price * (1 - item.discount / 100))
                    : item.price;

                  return (
                    <div
                      key={item.id}
                      className="flex gap-3 p-3 border rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded bg-gray-100"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500 mb-2">
                          {item.category}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 w-7 p-0"
                              onClick={() =>
                                onUpdateQuantity(item.id, item.quantity - 1)
                              }
                            >
                              <Icon name="Minus" size={12} />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 w-7 p-0"
                              onClick={() =>
                                onUpdateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <Icon name="Plus" size={12} />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 w-7 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => onRemove(item.id)}
                          >
                            <Icon name="Trash2" size={12} />
                          </Button>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-medium text-sm">
                          {discountedPrice * item.quantity} ₽
                        </div>
                        {item.discount && (
                          <div className="text-xs text-gray-400 line-through">
                            {item.price * item.quantity} ₽
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Итого:</span>
                  <span>{total} ₽</span>
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    Оплатить картой
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Icon name="Banknote" size={16} className="mr-2" />
                    Оплатить наличными
                  </Button>
                </div>

                <div className="text-xs text-gray-500 text-center">
                  <Icon name="Shield" size={12} className="inline mr-1" />
                  Безопасная оплата • Быстрая доставка
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
