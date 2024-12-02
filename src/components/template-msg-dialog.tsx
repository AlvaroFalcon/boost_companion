"use client";
import React from "react";
import { Template } from "../types/app-types";
import { Nova } from "../types/default-templates";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type Props = {
  children: React.ReactNode;
  template?: Template;
};

const defaultTemplate = (): Template => Nova;

const TemplateDialog = (props: Props) => {
  const { children, template } = props;
  const [templateToEdit, setTemplateToEdit] = React.useState<Template>(
    template || defaultTemplate(),
  );

  const handleSubmit = () => {
    // TODO
  };

  return (
    <Dialog
      onOpenChange={(open) =>
        open ? setTemplateToEdit(template || defaultTemplate()) : null
      }
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new message template</DialogTitle>
          <DialogDescription>
            Will be saved and then able to be used in your party creation.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Template name</Label>
            <Input
              id="template-name"
              className="col-span-3"
              onChange={(event) =>
                setTemplateToEdit({
                  ...templateToEdit,
                  name: event.currentTarget.value,
                })
              }
              defaultValue={templateToEdit.name}
            />
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Template</Label>
            <Input
              id="template-str"
              className="col-span-3"
              onChange={(event) =>
                setTemplateToEdit({
                  ...templateToEdit,
                  template: event.currentTarget.value,
                })
              }
              defaultValue={templateToEdit.template}
            />
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Tank icon
            </Label>
            <Input
              id="tank-icon"
              className="col-span-3"
              onChange={(event) =>
                setTemplateToEdit({
                  ...templateToEdit,
                  tankIcon: event.currentTarget.value,
                })
              }
              defaultValue={templateToEdit.tankIcon}
            />
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Healer icon
            </Label>
            <Input
              id="heal-icon"
              className="col-span-3"
              onChange={(event) =>
                setTemplateToEdit({
                  ...templateToEdit,
                  healerIcon: event.currentTarget.value,
                })
              }
              defaultValue={templateToEdit.healerIcon}
            />
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Dps icon
            </Label>
            <Input
              id="dps-icon"
              className="col-span-3"
              onChange={(event) =>
                setTemplateToEdit({
                  ...templateToEdit,
                  dpsIcon: event.currentTarget.value,
                })
              }
              defaultValue={templateToEdit.healerIcon}
            />
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Key icon
            </Label>
            <Input
              id="key-icon"
              className="col-span-3"
              onChange={(event) =>
                setTemplateToEdit({
                  ...templateToEdit,
                  keyIcon: event.currentTarget.value,
                })
              }
              defaultValue={templateToEdit.healerIcon}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={handleSubmit}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TemplateDialog;
