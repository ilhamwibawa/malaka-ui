import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom/matchers'
import { describe, it, expect, } from 'vitest'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './dialog'
import { Button } from "./button"
import { Label } from "./label"
import { Input } from "./input"


describe("Dialog component", () => {
  it("should open the dialog when the trigger is clicked", () => {
    render(
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Button Trigger</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>

          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    )

    fireEvent.click(screen.getByText('Button Trigger'))
  expect(screen.getByText('Edit profile')).toBeInTheDocument()
  expect(screen.getByText("Make changes to your profile here. Click save when you're done.")).toBeInTheDocument()
  })



  it("should close the dialog when the cancel button is clicked", () => {
    render(
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Button Trigger</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
        <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    )

    fireEvent.click(screen.getByText('Button Trigger'))
    fireEvent.click(screen.getByText('Cancel'))

    expect(screen.queryByText('Edit profile')).not.toBeInTheDocument()
  })



})